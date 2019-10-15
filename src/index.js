/* for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
} */

const b = $('body');
b.append('<select></select>');

function arrToSelect(arr) {
  const select = $('select');
  for (let j = 0; j < arr.length; j++) {
    const option = $(`<option value="${j}">${arr[j]}</option>`);
    option.on('click', () => { console.log(j); });
    select.append(option);
  }
}

arrToSelect(['a', 'b', 'c', 'd', 'e']);
