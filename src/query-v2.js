/*

tierlist-type
search-mode

Char      | Ani       | Staff    | User
__________|___________|__________|____
Name      | Name      | Name     | Name
Origin    |           |          |
          | Studio    |          |
User Fav  | User Fav  | User Fav |
          | User List |          |
Season    | Season    |          |

*/
let query,
  queryPage = 1,
  queryDataType,
  killFlag = true,
  querySwitch = false;

// update search text and query
function searchQuery(type, mode) {
  const querySearch = document.getElementById("query-search");
  switch (type) {
    case "Character":
      switch (mode) {
        case "Name":
          querySearch.setAttribute("placeholder", "Aki Adagaki");
          query = `
            query ($id: Int, $page: Int, $perPage: Int, $search: String) {
              Page (page: $page, perPage: $perPage) {
                pageInfo {
                  hasNextPage
                  perPage
                }
                characters (id: $id, search: $search) {
                  id
                  name {
                    full
                  }
                  image {
                    medium
                  }
                }
              }
            }
          `;
          queryDataType = "character.name";
          break;
        case "Origin":
          querySearch.setAttribute("placeholder", "Bakemonogatari");
          query = `
            query ($id: Int, $page: Int, $perPage: Int, $search: String) {
              Page {
                media (id: $id, search: $search) {
                  characters (page: $page, perPage: $perPage) {
                    pageInfo {
                      hasNextPage
                      perPage
                    }
                    nodes {
                      id
                      name {
                        full
                      }
                      image {
                        medium
                      }
                    }
                  }
                }
              }
            }
          `;
          queryDataType = "character.origin";
          break;
        case "Season":
          querySearch.setAttribute("placeholder", "Not working yet...");
          // idk????
          queryDataType = "character.season";
          break;
        case "User":
          querySearch.setAttribute("placeholder", "Baros");
          query = `
            query ($id: Int, $page: Int, $perPage: Int, $search: String) {
              Page {
                users (id: $id, search: $search) {
                  id
                  favourites {
                    characters (page: $page, perPage: $perPage) {
                      pageInfo {
                        hasNextPage
                        perPage
                      }
                      nodes {
                        id
                        name {
                          full
                        }
                        image {
                          medium
                        }
                      }
                    }
                  }
                }
              }
            }
          `;
          queryDataType = "character.users";
          break;
      }
      break;
    case "Animanga":
      switch (mode) {
        case "Name":
          querySearch.setAttribute("placeholder", "One Punch Man");
          query = `
            query ($id: Int, $page: Int, $perPage: Int, $search: String) {
              Page (page: $page, perPage: $perPage) {
                pageInfo {
                  hasNextPage
                  perPage
                }
                media (id: $id, search: $search) {
                  id
                  title {
                    romaji
                  }
                  coverImage {
                    medium
                  }
                }
              }
            }
          `;
          queryDataType = "animanga.name";
          break;
        case "Season":
          querySearch.setAttribute("placeholder", "Not working yet...");
          // idk????
          queryDataType = "animanga.season";
          break;
        case "Studio":
          querySearch.setAttribute("placeholder", "Kyoto Animation");
          query = `
            query ($id: Int, $page: Int, $perPage: Int, $search: String) {
              Page {
                studios (id: $id, search: $search) {
                  media (page: $page, perPage: $perPage) {
                    pageInfo {
                      hasNextPage
                      perPage
                    }
                    nodes {
                      id
                      title {
                        romaji
                      }
                      coverImage {
                        medium
                      }
                    }
                  }
                }
              }
            }
          `;
          queryDataType = "animanga.studios";
          break;
        case "User":
          querySearch.setAttribute("placeholder", "Sei");
          query = `
            query ($id: Int, $page: Int, $perPage: Int, $search: String) {
              Page {
                users (id: $id, search: $search) {
                  favourites {
                    anime (page: $page, perPage: $perPage) {
                      pageInfo {
                        hasNextPage
                        perPage
                      }
                      nodes {
                        id
                        title {
                          romaji
                        }
                        coverImage {
                          medium
                        }
                      }
                    }
                    manga (page: $page, perPage: $perPage) {
                      pageInfo {
                        hasNextPage
                        perPage
                      }
                      nodes {
                        id
                        title {
                          romaji
                        }
                        coverImage {
                          medium
                        }
                      }
                    }
                  }
                }
              }
            }
          `;
          queryDataType = "animanga.users";
          break;
        case "List":
          querySearch.setAttribute("placeholder", "Lynnx");
          // not sure
          queryDataType = "animanga.list";
          break;
      }
      break;
    case "Staff":
      switch (mode) {
        case "Name":
          querySearch.setAttribute("placeholder", "Aoi Yuuki");
          query = `
            query ($id: Int, $page: Int, $perPage: Int, $search: String) {
              Page (page: $page, perPage: $perPage) {
                pageInfo {
                  hasNextPage
                  perPage
                }
                staff (id: $id, search: $search) {
                  id
                  name {
                    full
                  }
                  image {
                    medium
                  }
                }
              }
            }
          `;
          queryDataType = "staff.name";
          break;
        case "User":
          querySearch.setAttribute("placeholder", "K1ngOfSloth");
          query = `
            query ($id: Int, $page: Int, $perPage: Int, $search: String) {
              Page {
                users (id: $id, search: $search) {
                  favourites {
                    staff (page: $page, perPage: $perPage) {
                      pageInfo {
                        hasNextPage
                        perPage
                      }
                      nodes {
                        id
                        name {
                          full
                        }
                        image {
                          medium
                        }
                      }
                    }
                  }
                }
              }
            }
          `;
          queryDataType = "staff.users";
          break;
      }
      break;
    case "User":
      switch (mode) {
        case "Name":
          querySearch.setAttribute("placeholder", "Robiracer");
          query = `
          query ($id: Int, $page: Int, $perPage: Int, $search: String) {
            Page (page: $page, perPage: $perPage) {
              pageInfo {
                hasNextPage
                perPage
              }
              users (id: $id, search: $search) {
                id
                name
                avatar {
                  medium
                }
              }
            }
          }
        `;
          queryDataType = "user.name";
          break;
        case "Following":
          querySearch.setAttribute("placeholder", "Ghoulish");

          queryDataType = "user.following";
          break;
        case "Followers":
          querySearch.setAttribute("placeholder", "Rainling");

          queryDataType = "user.followers";
          break;
      }
      break;
  }
}

function handleQuery() {
  const querySearch = document.getElementById("query-search");
  let variables = {
    search: `${querySearch.value}`,
    page: `${queryPage}`,
    perPage: 50,
  };
  const url = "https://graphql.anilist.co";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: query,
      variables: variables,
    }),
  };
  fetch(url, options).then(handleResponse).then(handleData).catch(handleError);
  cardPool.classList.add("out");
}

function handleResponse(response) {
  return response
    .json()
    .then((json) => (response.ok ? json : Promise.reject(json)));
}

function handleData(data) {
  const queryDataBase = data.data.Page;
  let queryData, hasNextPage;

  function createCard(id, name, image) {
    const cardDiv = document.createElement("DIV");
    const cardName = document.createElement("P");
    const cardImg = document.createElement("IMG");

    cardDiv.setAttribute("id", `c${id}`);
    cardDiv.classList.add("card");
    cardDiv.setAttribute("draggable", true);
    cardName.classList.add("card-name");
    cardName.innerHTML = `${name}`;
    cardImg.classList.add("card-image");
    cardImg.setAttribute("draggable", false);
    cardImg.setAttribute("src", `${image}`);

    cardDiv.appendChild(cardName);
    cardDiv.appendChild(cardImg);
    qResult.appendChild(cardDiv);

    refreshEventListeners();
  }

  function createCardPool() {
    const querySearch = document.getElementById("query-search");

    if (querySearch.value === "") {
      return;
    }

    if (killFlag === true) {
      const x = qResult.childElementCount;
      for (let i = 0; i !== x; i++) {
        qResult.removeChild(qResult.lastChild);
      }
      qResult.scrollTop = 0;
    }

    switch (queryDataType) {
      case "character.name":
        queryData = queryDataBase.characters;
        hasNextPage = queryDataBase.pageInfo.hasNextPage;
        queryData.forEach((character) => {
          const id = character.id;
          const name = character.name.full;
          const image = character.image.medium;
          createCard(id, name, image);
        });
        break;
      case "character.origin":
        queryData = queryDataBase.media[0].characters.nodes;
        hasNextPage = queryDataBase.media[0].characters.pageInfo.hasNextPage;
        queryData.forEach((character) => {
          const id = character.id;
          const name = character.name.full;
          const image = character.image.medium;
          createCard(id, name, image);
        });
        break;
      case "character.users":
        queryData = queryDataBase.users[0].favourites.characters.nodes;
        hasNextPage =
          queryDataBase.users[0].favourites.characters.pageInfo.hasNextPage;
        queryData.forEach((character) => {
          const id = character.id;
          const name = character.name.full;
          const image = character.image.medium;
          createCard(id, name, image);
        });
        break;
      case "animanga.name":
        queryData = queryDataBase.media;
        hasNextPage = queryDataBase.pageInfo.hasNextPage;
        queryData.forEach((media) => {
          const id = media.id;
          const name = media.title.romaji;
          const image = media.coverImage.medium;
          createCard(id, name, image);
        });
        break;
      case "animanga.studios":
        queryData = queryDataBase.studios[0].media.nodes;
        hasNextPage = queryDataBase.studios[0].media.pageInfo.hasNextPage;
        queryData.forEach((media) => {
          const id = media.id;
          const name = media.title.romaji;
          const image = media.coverImage.medium;
          createCard(id, name, image);
        });
        break;
      case "animanga.users":
        if (querySwitch === false) {
          queryData = queryDataBase.users[0].favourites.anime.nodes;
          hasNextPage =
            queryDataBase.users[0].favourites.anime.pageInfo.hasNextPage;
          queryData.forEach((media) => {
            const id = media.id;
            const name = media.title.romaji;
            const image = media.coverImage.medium;
            createCard(id, name, image);
          });

          if (hasNextPage === false) {
            querySwitch = true;
          }
          break;
        } else if (querySwitch === true) {
          queryData = queryDataBase.users[0].favourites.manga.nodes;
          hasNextPage =
            queryDataBase.users[0].favourites.manga.pageInfo.hasNextPage;
          queryData.forEach((media) => {
            const id = media.id;
            const name = media.title.romaji;
            const image = media.coverImage.medium;
            createCard(id, name, image);
          });
          if (hasNextPage === false) {
            querySwitch = false;
          }
          break;
        }
        break;
      case "staff.name":
        queryData = queryDataBase.staff;
        hasNextPage = queryDataBase.pageInfo.hasNextPage;
        queryData.forEach((staff) => {
          const id = staff.id;
          const name = staff.name.full;
          const image = staff.image.medium;
          createCard(id, name, image);
        });
        break;
      case "staff.users":
        queryData = queryDataBase.users[0].favourites.staff.nodes;
        hasNextPage =
          queryDataBase.users[0].favourites.staff.pageInfo.hasNextPage;
        queryData.forEach((staff) => {
          const id = staff.id;
          const name = staff.name.full;
          const image = staff.image.medium;
          createCard(id, name, image);
        });
        break;
      case "user.name":
        queryData = queryDataBase.users;
        hasNextPage = queryDataBase.pageInfo.hasNextPage;
        queryData.forEach((user) => {
          const id = user.id;
          const name = user.name;
          const image = user.avatar.medium;
          createCard(id, name, image);
        });
        break;
    }
    if (hasNextPage === true) {
      queryPage++;
      killFlag = false;
      handleQuery();
    } else if (querySwitch === true) {
      queryPage = 1;
      killFlag = false;
      handleQuery();
    } else {
      queryPage = 1;
      killFlag = true;
    }
  }

  createCardPool();
}

function handleError(error) {
  alert("Error, check console");
  console.error(error);
}
