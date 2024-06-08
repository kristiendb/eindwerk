import Link from "next/link";

const ChapterNav = () => {
  return (
    <>
      <ul>
        <Link href="/home/cursussen/[cursus]-[hoofdstuk]-[section]">
          <li>INLEIDING</li>
        </Link>
        <li>THEORIE</li>
        <li>OEFENINGEN</li>
        <li>OPDRACHTEN</li>
        <li>VOORBEELDEN</li>
      </ul>
    </>
  );
};

export default ChapterNav;
