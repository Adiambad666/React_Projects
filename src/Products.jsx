function Products()
{
  let l1="Applee";
  let l2="orange";
  let l5="banana";
  let l3="3/12/2023";
  let l4="4/11/2023";
  return(<>
  <div className="input">
  <div class="container text-center">
  <div class="row">
    <div class="col-sm-4">{l1}</div>
    <div class="col-sm-4">{l3}</div>
    <div class="col-sm-2"><button type="button" class="btn btn-danger">Delete</button></div>
  </div>
</div>
</div>
<div className="input">
  <div class="container text-center">
  <div class="row">
    <div class="col-sm-4">{l2}</div>
    <div class="col-sm-4">{l4}</div>
    <div class="col-sm-2"><button type="button" class="btn btn-danger">Delete</button></div>
  </div>
</div>
</div>

  </>)
}

export default Products;