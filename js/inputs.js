const body = document.querySelector('.wrapper')

const bill = document.getElementById("bill");
const total_tip = document.getElementById("total_tip");
const total = document.getElementById("total");
const nr_ppl = document.getElementById("nr_ppl");

const room = document.getElementById('tip');
const btns = document.querySelectorAll('.tip');

const reset = document.getElementById('reset');

['click', 'keyup'].forEach(evt =>
  body.addEventListener(evt, e => {
    const btn = document.querySelector('.active');
    let tip = !btn ? 0 : (btn.classList.contains('custom_tip') ? btn.value * 0.01 : btn.getAttribute('id')) ;
    tip = tip * bill.value;
    tip = !nr_ppl.value ? tip : tip / nr_ppl.value
    tip = Math.round(tip * 100) / 100;
    console.log(tip);
    const b = !nr_ppl.value ? 0 : Math.round(((bill.value / nr_ppl.value) + tip) * 100) / 100;
    total_tip.setAttribute('value', `$${tip}`);
    total.setAttribute('value', `$${b}`);
  })
);

['click', 'keyup'].forEach(evt =>
  room.addEventListener(evt, e => {
    btns.forEach(btn => {
      if (btn.getAttribute('id') === e.target.getAttribute('id')) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  })
)

reset.addEventListener('click', e => {
  bill.value = ''
  nr_ppl.value = ''
  const btn = document.querySelector('.active');
  btn.classList.remove('active');
});
