import axios from 'axios';
import { useEffect, useState } from 'react';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import PublicationsTable from '../../../components/Publications/list';

const getPublicationsServices = async () => {
  const endpoint = `${process.env.REACT_APP_BACKEND_URL}/publications`;
  try {
    const response = await axios.get(endpoint);
    const { publications } = response.data;
    return publications;
  } catch (error) {
    console.error(error);
  }
};

const AdminPublications = () => {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    getPublicationsServices().then((publications) =>
      setPublications(publications)
    );
  }, []);

  const totalPublications = publications.length;

  return (
    <>
      <div className="container mx-auto">
        <h1 className="my-3">Listado de noticias ({totalPublications})</h1>
        <Breadcrumb />
        <PublicationsTable publications={publications} />
      </div>
    </>
  );
};

export default AdminPublications;
