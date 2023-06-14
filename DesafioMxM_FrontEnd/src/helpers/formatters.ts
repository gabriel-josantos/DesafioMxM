// export function generateCpfMask(cpf: string) {
//   cpf = cpf.replace(/\D/g, "");
//   cpf = cpf.replace(/\D/g, "");
//   let cpfBlocks = [
//     cpf.slice(0, 3),
//     cpf.slice(3, 6),
//     cpf.slice(6, 9),
//     cpf.slice(9),
//   ];

//   cpfBlocks = cpfBlocks.map((block, i) => {
//     if (block.length >= 1 && i === cpfBlocks.length - 1) {
//       block = "-" + block;
//     } else if (block.length >= 1 && i >= 1) {
//       block = "." + block;
//     }
//     return block;
//   });

//   return cpf;
// }

// export function genereatePhoneNumberMask(phoneNumber: string) {

//     phoneNumber = phoneNumber.replace(/\D/g, "");
//     const phoneNumberBlocks = [
//       phoneNumber.slice(0, 2),
//       phoneNumber.slice(2, 3),
//       phoneNumber.slice(3, 7),
//       phoneNumber.slice(7),
//     ];
//     const symbols = ["(", ")", " ", "-"];

//     if(phoneNumberBlocks[0].length >= 1) phoneNumberBlocks[0] =  '(' + phoneNumberBlocks[0]
//     if(phoneNumberBlocks[1].length >= 1) phoneNumberBlocks[1] =  ') ' + phoneNumberBlocks[1]
//     if(phoneNumberBlocks[2].length >= 1) phoneNumberBlocks[2] =  ' ' + phoneNumberBlocks[2]
//     if(phoneNumberBlocks[3].length >= 1) phoneNumberBlocks[3] =  '-' + phoneNumberBlocks[3]

//   return phoneNumberBlocks.join("");
// }
