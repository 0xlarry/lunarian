# Lunarian

Portfolio dashboard for the Terra ecosystem

## Colors

| Name            | HEX       | RGB           |
| --------------- | --------- | ------------- |
| Cornflower Blue | `#6593e9` | 101, 147, 233 |
| Cerulean Blue   | `#3027a8` | 48, 71, 168   |
| Lavender        | `#dfe8f9` | 223, 232, 249 |

## Deploy on Heroku

Clone repository:

```bash
git clone https://github.com/0xlarry/lunarian.git
cd lunarian
```

Configure Heroku:

```bash
heroku login
heroku buildpacks:add heroku/nodejs
heroku buildpacks:add https://github.com/heroku/heroku-buildpack-static
```

Push to Heroku:

```bash
heroku git:remote -a <projectName>
git push heroku master
```
