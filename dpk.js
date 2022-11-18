const crypto = require("crypto");

function createPartitionKey(data) {
  return crypto.createHash("sha3-512").update(data).digest("hex");
}

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  if (event === undefined) {
    return TRIVIAL_PARTITION_KEY;
  }

  if (event.partitionKey) {
    candidate = event.partitionKey;
  } else {
    const data = JSON.stringify(event);
    candidate = createPartitionKey(data);
  }

  // Ensure we return a string
  if (typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }

  // Truncate the result if too long
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = createPartitionKey(candidate);
  }
  return candidate;
};
