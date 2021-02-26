function PropsComponent(props) {
    console.log(props);
    return (
        <div>
            <div>{props.name}</div>
            <div>{props.age}</div>
        </div>
    );
}

export default PropsComponent;
