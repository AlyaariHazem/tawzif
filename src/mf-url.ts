export const mfQuery = (version = '1.0.0') => {
  const d = new Date().toISOString();
  const fmt = d.slice(5,7)+d.slice(8,10)+d.slice(11,13)+d.slice(14,16); // MMDDHHmm
  return `?v=${version}&d=${fmt}`;
};
