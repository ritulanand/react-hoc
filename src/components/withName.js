
const withName = (OldComponent) => {
    return function EnhancementComponent(props){
        return (
            <OldComponent {...props} name="withName" />
        )
    }
}

export  default withName;