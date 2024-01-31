import React, { FormEvent, useReducer} from 'react'
import { useAppDispatch } from '../Store/store'
import { addProduct } from '../Store/Features/productSlice';
import { v4 as uuidv4 } from 'uuid';

type actionType =
  | { type: "SET_FIELD"; field: string; value: string }
  | { type: "RESET" };

  interface Product {
    pImg: string;
    pName: string;
    pPrice: number | '';
    pDescription: string;
  }

  const InitialState:Product = {
    pImg:'',
    pName:'',
    pPrice:'',
    pDescription:''
  };
  

  const reducer = (state: Product, action: actionType):Product => {
    switch (action.type) {
      case "SET_FIELD":
        return { ...state, [action.field]: action.value };
      case "RESET":
        return InitialState;
      default:
        return state;
    }
  };

  // custom hook
const useForm = () => {
    
    const [state, dispatch] = useReducer(reducer, InitialState);
    const setField = (field: string, value: string) => {
      dispatch({ type: "SET_FIELD", field, value });
    };
    const resetForm = () => {
      dispatch({ type: "RESET" });
    };
    return { state, setField, resetForm };
  }


const AppProduct = () => {
    const dispatch = useAppDispatch();
    const { state, setField, resetForm } = useForm();

    const pId:string = uuidv4();

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setField(name, value);
  };
  
  const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
      dispatch(addProduct({
      pId:pId,
      pName:state.pName,
      pImg:state.pImg,
      pPrice:state.pPrice ? state.pPrice :0,
      pDescription:state.pDescription}))

      resetForm();
  }
   
  return (
    <div className='mx-auto w-50'>
        <div>
          <h2 className='text-center bg-warning text-dark p-2 rounded-3'>Add New Product</h2>
        </div>
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label className='form-label' htmlFor="pName">Product Name</label>
                <input className='form-control' type="text" name="pName" id="pName" value={state.pName} onChange={handleFormChange} required />
            </div>
            <div className='mb-3'>
                <label className='form-label' htmlFor="pPrice">Product Price</label>
                <input className='form-control' type="number" name="pPrice" id="pPrice" value={state.pPrice} onChange={handleFormChange} required />
            </div>
            <div className='mb-3'>
                <label className='form-label' htmlFor="pImg">Product Img_URL</label> 
                <input className='form-control' type="text" name="pImg" id="pImg" value={state.pImg} onChange={handleFormChange} required />
            </div>
            <div className='mb-3'>
                <label className='form-label' htmlFor="pDescription">Product Description</label>
                <input className='form-control' type="text" name="pDescription" id="pDescription" value={state.pDescription} onChange={handleFormChange} required />
            </div>
            <div className='d-flex justify-content-around'>
                <button className='btn btn-primary' type='submit'
                >Add Product</button>
                <button
                    className="btn btn-warning"
                    type="button"
                    onClick={resetForm}
                        >
                    Reset
            </button>
            </div>
        </form>
    </div>
  )
}

export default AppProduct