import Item from "./Item"

const arr=[1,2,3,4,5,6,7,8,9,10]

const List = () => {
    return (
        <div>
            <h1>List</h1>
            {arr.map((item, index) => <div key={index}>{item}</div>)}
        </div>
    );
}


export default List