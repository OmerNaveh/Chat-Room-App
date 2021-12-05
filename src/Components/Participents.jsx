
export default function Participents(props){
    const renderActiveUsers = ()=>{
        if(!props.allActiveUsers) return
        else{
            const userElements=[];
            props.allActiveUsers.forEach((user,index)=>{
                userElements.push(<p id={index} className='activeUsers'><i className="fas fa-circle green"></i> {user}</p>)
            })
            return userElements;
        }
    }
    return(
        <div className='participentsDiv'>
            <div className='participents'>
                {renderActiveUsers()}
                <p className="participentsCounter"> <i className="fas fa-users"></i> {props.allActiveUsers?props.allActiveUsers.length : 0}</p>
            </div>
            <p className='participentsCounter'></p>
        </div>
    )
}