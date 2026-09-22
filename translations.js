// Key = mô tả đã bỏ tiền tố "A pair of" / "A piece of" (xem cleanProductKey)
const exactTranslationMap = {
  // Dây đeo đồng hồ (Pair)
  'epsom calfskin watch strap weinheimer black': 'Da bê vân epsom weinheimer màu đen',
  'zermatt calfskin watch strap': 'Da bê zermat',
  'sully goatskin watch strap orange': 'Da dê vân sully màu cam (orange)',
  'epsom calfskin leather watch straps navy blue': 'Da bê vân epsom haas màu xanh navy (navy blue)',
  'cowhide leather watch strap Jewel': 'Da bò thuộc mã MA230007 Jewel',
  'epsom calfskin leather watch straps rouge': 'Da bê vân epsom haas màu đỏ (rouge)',

  // Ví (Piece)
  'swift calfskin wallet': 'Da bê swift',
  'Sully goatskin wallet noir black': 'Da dê vân sully màu noir',
  'Sully goatskin wallet light cream': 'Da dê vân sully màu light cream',
  'cowhide wallet agave': 'Da bò thuộc mã MA660021 agave',
  'zermatt calfskin wallet': 'Da bê zermat',
  'Epsom calfskin wallet haas cream': 'Da bê vân epsom haas màu kem (cream)'
};

function normalizeText(text) {
  return text ? text.trim().replace(/\s+/g, ' ') : '';
}

function getProductUnit(rawDesc) {
  const text = normalizeText(rawDesc).toLowerCase();
  if (text.includes('piece')) return 'Piece';
  return 'Pair'; // mặc định là Pair
}

function cleanProductKey(rawDesc) {
  let cleaned = normalizeText(rawDesc);
  cleaned = cleaned.replace(/^(a|\d+(\.\d+)?)\s+(pair|piece)s?\s+of\s+/i, '');
  return cleaned;
}

function translateProductName(rawDesc) {
  if (!rawDesc) return '';
  const exactKey = Object.keys(exactTranslationMap).find(key => normalizeText(key).toLowerCase() === normalizeText(rawDesc).toLowerCase());
  return exactKey ? exactTranslationMap[exactKey] : '';
}

module.exports = { translateProductName, cleanProductKey, getProductUnit };
