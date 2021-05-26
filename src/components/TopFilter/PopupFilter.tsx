import { StatusFilterType } from "../../redux/productsReducer"
import React, {useCallback} from "react";
import {useDispatch} from "react-redux";
import {actions} from "../../redux/productsReducer";

type PropsType = {
    statusFilter: Array<StatusFilterType>,
    setModal: (value:boolean)=> void
}


const PopupFilter:React.FC<PropsType> = ({statusFilter,setModal}) => {
    const dispatch = useDispatch()
    const onChangeFilter = useCallback((value:string)=>{
        dispatch(actions.setFilterByPrice(value))
        setModal(false)
    },[dispatch, setModal])

    return (
        <div className="sort__popup">
            <ul>
                {statusFilter.map(item => {
                    return <li
                        key={item.value}
                        className={item.isChecked ? 'active': ''}
                        onClick={()=>onChangeFilter(item.value)}
                    >
                        {item.title}
                    </li>
                })}




            </ul>
        </div>
    )
}
export {
PopupFilter
}