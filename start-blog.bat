# bundle exec jekyll s

docker run -v="$PWD:/srv/jekyll" -p 4000:4000 -idt jekyll/jekyll:4.0.0 bash
