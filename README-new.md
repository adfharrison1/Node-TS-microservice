### notes 
- i assume you're fine with the API key being present in a public repository!!! this would be bad if it was real. watch out for bored people trying to take your test API down!

- Ive chosen to use a containerized service that could be deployed (with the relevant infra additions) to your VPC or equivalent, to show that i know how to use Docker, no other reason. 

- you can run `yarn` then `yarn build` then `yarn dev` to run without docker (i use yarn because im most familiar) and then you can interact with the service at `localhost:3000` - this method would be most useful for local dev.

- for containerized, ensure Docker is running on your machine, then build with `docker build -t kf-test-api .` the -t gives the image a handy name to then use `docker run -d -p 3000:3000 kf-test-api` to run the service. the -d arg means it runs detached so you don't have a live terminal open. the docker port is mapped to localhost:3000 so you can interact there. This wont track changes so is only useful for final testing and deployment.

- the gitignore is set up in a pretty default way to minimize mess in the repo and unnecessary or sensitive info getting into public domain (expect your API key lol)

