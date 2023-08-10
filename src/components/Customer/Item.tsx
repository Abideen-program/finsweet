type itemProp = {
  image: string;
  name: string;
  position: string;
};

const Item = (props: itemProp) => {
  const { image, name, position } = props;
  return (
    <>
      <div className="md:w-[30%] flex flex-col justify-center items-center gap-4 border border-[#E0EAFB] rounded-lg p-5 lg:p-10 hover:shadow-lg shadow-[#E0EAFB] transition-all duration-300 ease-in">
        <p className="text-[10px] text-center lg:w-[80%]">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <div className="text center flex flex-col items-center justify-center">
          <div className="w-[30px]">
            <img
              src={image}
              alt="badge"
              className="w-full object-contain mb-2"
            />
          </div>

          <h4 className="text-xs font-bold text-center">{name}</h4>

          <p className="text-[10px] text-center">{position}</p>
        </div>
      </div>
    </>
  );
};

export default Item;
