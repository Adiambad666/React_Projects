import './All.css';
function Input()
{
  return(<>
  <div className='input'>
  <div class="container text-center">
  <div class="row">
    <div class="col-sm-4"><input type='text' placeholder='Enter product Name'></input></div>
    <div class="col-sm-4"><input type='date'></input></div>
    <div class="col-sm-2"><button type="button" class="btn btn-success">Success</button></div>
  </div>
</div>
</div>
  </>);
}

export default Input;