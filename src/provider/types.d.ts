interface ModelContext{
    onPresent: (node: React.ReactNode, key?: string)=>void;
    onDismiss: Handler;
    setCloseOnOverlayClick: React.Dispatch<React.SetStateAction<boolean>>
}