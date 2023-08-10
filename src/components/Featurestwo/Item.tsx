type itemProp = {
  image: string;
  h4: string;
};

const Item = (props: itemProp) => {
  const { image, h4 } = props;
  return (
    <>
      <div className="md:w-[30%] md:pr-3 md:border-r-2">
        <div className="w-[30px]">
          <img src={image} alt="badge" className="w-full object-contain" />
        </div>

        <h4 className="font-bold my-2">{h4}</h4>

        <p className="text-[10px]">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor.
        </p>
      </div>
    </>
  );
};

export default Item;
