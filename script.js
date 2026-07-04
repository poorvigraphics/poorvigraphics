document.querySelectorAll('.gallery img').forEach(img=>{
  img.addEventListener('click',()=>{
    const w=window.open('','_blank');
    w.document.write(`<title>Poorvi Graphics</title><body style="margin:0;background:#111;display:flex;align-items:center;justify-content:center;min-height:100vh"><img src="${img.src}" style="max-width:96%;max-height:96vh;border-radius:12px"></body>`);
  });
});
