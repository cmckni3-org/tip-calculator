function baseCost()
{
  return 100 * parseInt(document.getElementById('base-cost').value, 10);
}
function tip()
{
  return parseInt(document.getElementById('tip-percentage').value, 10) / 100;
}
function tax()
{
  return parseInt(document.getElementById('tax-rate').value, 10) / 100;
}
function subtotal()
{
  return baseCost() * (tax() + 1);
}
function total()
{
  return Math.floor(subtotal() * (tip() + 1)) / 100;
}
function calculate()
{
  document.getElementById('total').innerHTML = '$' + total();
  return total();
}
window.onload = function()
{
  document.getElementById('submit').onclick = calculate;
}
