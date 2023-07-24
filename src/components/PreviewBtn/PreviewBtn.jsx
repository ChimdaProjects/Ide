import show from "../../assets/view.svg";
import hide from "../../assets/hide.svg"
import { useSelector, useDispatch } from "react-redux";
import { togglePreview } from "../../features/preview";



function PreviewBtn() {
    const previewData = useSelector(state => state.preview);
    const dispatch = useDispatch();
    return ( 
        <button
        onClick={()=>dispatch(togglePreview())} 
        className="py-2 px-4 rounded bg-blue-700 flex mx-auto items-center text-left text-slate-50">
            <img src={previewData.preview? hide : show }  className="w-5 mr-3" alt="utton of preview code"/>
            <span>{previewData.preview? "Hide" : "Show"} preview</span>
        </button>
     );
}

export default PreviewBtn;