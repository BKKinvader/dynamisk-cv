import React from 'react';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PacmanLoader from "react-spinners/PacmanLoader";

function Home() {
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },5000)
  },[])
  const [avatarURL, setAvatarURL] = useState();
  const [githubUsername, setGitHubUsername] = useState();
  const [repoData, setRepoData] = useState(false);
  const [descriptionData] = useState();


  async function repoDataURL() {
    //Get repo data about github user
    await fetch('https://api.github.com/users/BKKinvader/repos')
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(36, result);
          const list = result.map((item) => (
            <div className="text-center">
              <a target="_blank" href={item.svn_url}>
                {item.name}
              </a>
              <p>Description:{item.description}</p>
            </div>
          ));
          setRepoData(list);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  function hideRepoData() {
    setRepoData(false);
  }

  useEffect(() => {
    fetch('https://api.github.com/users/BKKinvader')
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setAvatarURL(result.avatar_url);
          setGitHubUsername(result.login);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <div className="home">
      {
        loading?
        <PacmanLoader
        color={"#e66162"}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      :
      <div className="home">
              <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={avatarURL} />
        <Card.Body>
          <Card.Title>{githubUsername}</Card.Title>
          <Card.Text>
            I am a student at Campus Varberg and this is my Github repository.
          </Card.Text>

          {repoData ? (
            <Button variant="danger" onClick={hideRepoData}>
              Hide Projects
            </Button>
          ) : (
            <Button variant="primary" onClick={repoDataURL}>
              Projects
            </Button>
          )}
        </Card.Body>
      </Card>
      {repoData}
      {descriptionData}
        </div>
      }

    </div>
  );
}

export default Home;
