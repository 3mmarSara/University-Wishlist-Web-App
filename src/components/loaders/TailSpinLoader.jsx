import { TailSpin } from "react-loader-spinner";

function TailSpinLoader() {
  return (
    <TailSpin
      visible={true}
      height="40"
      width="40"
      color="var(--secondary-color)"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}

export default TailSpinLoader;
