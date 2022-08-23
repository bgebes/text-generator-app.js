import { useDispatch, useSelector } from 'react-redux';
import { getParas } from '../../redux/Paras/ParasSlice';
import { useEffect } from 'react';

function Result() {
  const { parasCount, includeHTML, paras, loading } = useSelector(
    (state) => state.paras
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getParas({
        parasCount: parasCount,
        format: includeHTML ? 'html' : 'text',
      })
    );
  }, [dispatch, parasCount, includeHTML]);

  return (
    <div className="container bg-success text-light p-5">
      {paras.map((paragraf, index) => (
        <p key={index}>{paragraf}</p>
      ))}
      {loading && 'Paragrafs are loading!'}
    </div>
  );
}

export default Result;
