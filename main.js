
main();

async function main() {
  let counter=0,
  url='https://hotelbandara.com/api/online/?i=9300';
  while(true){
    counter++;
    let res=await fetch(url)
      .then(r=>r.text())
      .catch(e=>JSON.stringify(e));
    console.log(counter+' '+res);
    await sleep(10);
  }
}

function sleep(timer=1){
  return new Promise(resolve=>{
    return setTimeout(e=>{
      return resolve();
    },timer*1000);
  });
}

