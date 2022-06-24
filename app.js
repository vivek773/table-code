const
  foodInfo = 
    [ { Name: 'Apple',     Colour: 'Green'  } 
    , { Name: 'Chocolate', Colour: 'Brown'  } 
    , { Name: 'Banana',    Colour: 'Yellow' } 
    ] 
, selectFood = document.getElementById('food-select')
, listFood_t = document.querySelector('table#food-list tbody') 
  ;
foodInfo.forEach(item=>
  {
  // table listFood elements
  let row           = listFood_t.insertRow()
  row.dataset.ref   = item.Name

  row.insertCell().textContent = item.Name
  row.insertCell().textContent = item.Colour

  // food-select
  selectFood.add( new Option(item.Name, item.Name))
  })
selectFood.add( new Option('All Food', 'All'))  // last one...
selectFood.querySelector('option').disabled = true

const tableArticles = listFood_t.querySelectorAll('tr[data-ref]')

tableArticles.forEach(el=>el.className='noDisplay') // none on start...

selectFood.onchange=()=>
  {
  let choose = selectFood.value 
  tableArticles.forEach(art=>
    {
    if (choose==='All' || choose===art.dataset.ref)
      art.classList.remove('noDisplay')
    else
      art.classList.add('noDisplay')
    })
  }