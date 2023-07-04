import listData from "../List/List";

function Home() {
    const listItem = listData.map((job) => {
      const itemText = `${job.title} - ${job.price}`;
      return <li key={job.id}>{itemText}</li>;
    });
    return (
        <div>
            <ul>
                {listItem}
            </ul>
        </div>
    )
}

export default Home
