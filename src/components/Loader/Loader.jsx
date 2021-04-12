import LoaderSpinner from "react-loader-spinner";
    import { styled } from 'react-jss';
      
    const useStyles = styled({
      div: `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      `,
    });

const Loader = () => {
  const classes = useStyles()
  return (
     <div className={classes.div}>
    {/* <div> */}
      <LoaderSpinner
        type="Watch"
        color="#00BFFF"
        height={40}
        width={40}
        timeout={3000} //3 secs
      />
      {/* <span className="Loading">Loading ...</span> */}
    </div>
  );
}

export default Loader;

