### notes  - please read first!
- I had a full day off and decided to enjoy myself with this extra piece of work - it shouldn't be too complex but might be one of the larger services you've seen for a tech test! - i fully acknowledge that it's a bit overkill for the task however i think it shows that I understand how a real-world service might be designed, particularly if it was intended to be extended and scaled, and used as a stable and reliable production service, where its lifecycle might also involve adding lots more dependencies, and even swapping them out, like changing database technology - the Dependency Injection and Clean Architecture principles here would allow that to be done much more easily. Be thankful i didnt bother writing a swagger middleware to serve up the docs with an interactive UI locally too - i thought about it ! all in all i think this only took about 6 hours - i took a few breaks too :) 
</br>
- If this were intended to be a serverless API, running on individual lambdas per handler for instance, i would take a different approach most likely, although the IoC and clean architecture principles might still apply. 
</br>
- Alongside just running locally in `dev` mode, Ive chosen to also provide a containerized service that could be deployed (with the relevant infra additions) to your VPC or equivalent, to show that i know how to use Docker, no other reason really.
</br>
- you can run `yarn` then `yarn build` then `yarn dev` to run without docker (i use yarn because im most familiar) and then you can interact with the service at `localhost:3000` - this method would be most useful for local dev.
</br>
- for containerized, ensure Docker is running on your machine, then build with `docker build -t kf-test-api .` the -t gives the image a handy name to then use `docker run -d -p 3000:3000 kf-test-api` to run the service. the -d arg means it runs detached so you don't have a live terminal open. the docker port is mapped to localhost:3000 so you can interact there. This wont track changes so is only useful for final testing and deployment.
</br>
- the gitignore is set up in a pretty default way to minimize mess in the repo and unnecessary or sensitive info getting into public domain 
</br>
- service roughly follows a Clean Architecture principle, not precisely, as i didnt want to over-complicate things, but the implementation of interfaces between layers would make things hard to break and easy to either swap out implementations or extend them, and makes the typesafety pretty good.
</br>
- im also using dependency injection, again, im aware this is slightly more complicated, however its a good way to ensure a service is easily testable, allows me to mock stubs of dependencies if need be. It creates inversion of control to make sure that instances of dependencies are created away from the code that consumes them, allowing them to be swapped out in only one place, and making the code more maintainable.
</br>
- `Awilix.scopePerRequest()` is used to isolate requests to their own scope, meaning more efficiency and stability - resources are cleaned up per request, and failure of one request shouldn't affect any others. If we were using a DB transaction, i could scope it to the request and roll it back at the end on failure (or that could be handled by the application code)
  </br>
- controllers are seperate to follow a RESTful pattern seperated on route concerns, would make them easier to understand as methods were added to each route.
</br>
- generally prefer function args as objects where applicable, helps typing and neatness with destructuring.
</br>
- Id probably prefer to paginate the get outages endpoint but i didnt have the time to see if you API supported it - id definitely do it if querying a DB
- </br>
- Id probably implement a proper request logging mechanism instead of all the console logs - maybe via event to a logging service.