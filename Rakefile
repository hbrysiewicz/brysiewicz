desc "compile and run the site"
task :clean do
  sh "git clean -f -X app/styles"
  sh "rm -rf tmp"
end

task :default => :clean do
  pids = [
    spawn("compass watch -c compass.rb"),
    spawn("node_modules/.bin/ember server -p 5000"),
  ]

  trap "INT" do
    Process.kill "INT", *pids
    exit 1
  end

  loop do
    sleep 1
  end
end
