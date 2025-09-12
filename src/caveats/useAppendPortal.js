import { createPortal } from 'react-dom';
export default function useAppendPortal(component,domNode){
    return createPortal(component,domNode)
}