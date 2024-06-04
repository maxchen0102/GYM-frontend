import Item from "./Item"


const List = ({listData}) => {
    return (
        <div className="list">
            {listData.map(item => <Item key={item.id}/>   )}
        </div>
    );
}


export default List