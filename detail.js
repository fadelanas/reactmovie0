import { useParams } from"react-router-dom";

function Detail(){
  /**
  * menggunakan useParams
  * digunakan untuk menangkap routing
  */
  const params = useParams();
  return (
    <h2>
        Halaman detail movie {params.id}
    </h2>
  );
}

export default Detail