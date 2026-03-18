const axios = require('axios');
const FormData = require('form-data');
const form = new FormData();
form.append('name', 'Test Node Upload');
form.append('brand', 'TestBrand');
form.append('price', '1000');
form.append('stock', '1');

axios.post('http://localhost:5000/api/admin/cars', form, {headers: form.getHeaders()})
  .then(res => console.log('SUCCESS:', res.data))
  .catch(e => console.error('ERROR:', e.response?.data || e.message));
