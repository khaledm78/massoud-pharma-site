const fs = require('fs');

function toArabicNumerals(numStr) {
  const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return numStr.replace(/[0-9]/g, w => arabicDigits[+w]);
}

function normalizeStr(str) {
  return (str || '').trim().toLowerCase().replace(/\s+/g, ' ');
}

function deduplicate() {
  const filePath = './lib/products-data.ts';
  let fileContent = fs.readFileSync(filePath, 'utf8');

  // Match the PRODUCTS_DATA array
  const regex = /(export const PRODUCTS_DATA: PharmaceuticalProduct\[\] = )([\s\S]*?)(;\s*$)/m;
  const match = fileContent.match(regex);

  if (!match) {
    console.error("Could not find PRODUCTS_DATA array in the file.");
    return;
  }

  const prefix = match[1];
  const arrayStr = match[2];
  const suffix = match[3];

  let products;
  try {
    products = eval(arrayStr);
  } catch (e) {
    console.error("Failed to parse PRODUCTS_DATA:", e.message);
    return;
  }

  console.log(`Loaded ${products.length} products for deduplication.`);

  const mergedMap = new Map();

  for (const product of products) {
    const id = product.id;
    if (!mergedMap.has(id)) {
      // Create a deep copy or use as-is
      mergedMap.set(id, {
        ...product,
        dosages: [...product.dosages]
      });
    } else {
      console.log(`Found duplicate ID: "${id}" for products "${product.tradeName}" and "${mergedMap.get(id).tradeName}"`);
      const master = mergedMap.get(id);

      // Merge trade names if master is shorter/less descriptive
      if (product.tradeName.length > master.tradeName.length && product.tradeName.includes(master.tradeName)) {
        master.tradeName = product.tradeName;
      }
      if (product.tradeNameAr && (!master.tradeNameAr || product.tradeNameAr.length > master.tradeNameAr.length)) {
        master.tradeNameAr = product.tradeNameAr;
      }

      // Merge dosages
      for (const dosage of product.dosages) {
        const isDuplicateDosage = master.dosages.some(d => 
          normalizeStr(d.form) === normalizeStr(dosage.form) && 
          normalizeStr(d.strength) === normalizeStr(dosage.strength)
        );

        if (!isDuplicateDosage) {
          console.log(`Appending missing dosage variant to ${id}: Form="${dosage.form}", Strength="${dosage.strength}"`);
          master.dosages.push(dosage);
        } else {
          console.log(`Skipping duplicate dosage variant for ${id}: Form="${dosage.form}", Strength="${dosage.strength}"`);
        }
      }
    }
  }

  const uniqueProducts = Array.from(mergedMap.values());
  console.log(`Deduplication finished. Unique products count: ${uniqueProducts.length}`);

  // Generate output code
  const formattedJson = JSON.stringify(uniqueProducts, null, 2);
  const updatedContent = fileContent.replace(regex, `${prefix}${formattedJson}${suffix}`);

  fs.writeFileSync(filePath, updatedContent, 'utf8');
  console.log("Successfully wrote deduplicated PRODUCTS_DATA to /lib/products-data.ts!");
}

deduplicate();
