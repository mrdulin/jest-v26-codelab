import simpleGit from 'simple-git';

export default function myFunction() {
  const git = simpleGit();
  git.checkout('my-branch');
}
