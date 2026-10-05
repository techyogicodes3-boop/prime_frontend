import test from 'node:test';
import assert from 'node:assert/strict';
import {apiUrl,followWhatsAppRedirect} from '../src/lib/api.js';

test('builds every API path through the configured API base',()=>{
  assert.equal(apiUrl('/api/enquiries'),'/api/enquiries');
  assert.equal(apiUrl('api/resources'),'/api/resources');
  assert.equal(apiUrl('https://example.com/file.jpg'),'https://example.com/file.jpg');
});

test('redirects only to the WhatsApp URL returned after a saved enquiry',()=>{
  let assigned='';
  const locationObject={assign:value=>{assigned=value}};
  assert.equal(followWhatsAppRedirect({whatsappUrl:'https://wa.me/919518963309?text=Saved'},locationObject),true);
  assert.equal(assigned,'https://wa.me/919518963309?text=Saved');
  assert.equal(followWhatsAppRedirect({whatsappUrl:'https://example.com'},locationObject),false);
});
