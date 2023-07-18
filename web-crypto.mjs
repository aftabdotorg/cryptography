async function encrypt(plaintext) {
  const key = await window.crypto.subtle.generateKey(
    {
      name: 'AES-GCM',
      length: 256,
    },
    true,
    ['encrypt', 'decrypt']
  );

  const encoder = new TextEncoder();

  const encodedData = encoder.encode(plaintext);
  const iv = window.crypto.getRandomValues(new Uint8Array(12));

  const cipher = await window.crypto.subtle.encrypt(
    {
      name: 'AES-GCM',
      iv: iv,
    },
    key,
    encodedData
  );

  const dicipher = await window.crypto.subtle.decrypt(
    {
      name: 'AES-GCM',
      iv: iv,
    },
    key,
    cipher
  );

  let decoder = new TextDecoder();
  let retDe = decoder.decode(dicipher);

  return { cipher, iv, retDe };
}

console.log(await encrypt('treadstone'));
// ! need http-server
