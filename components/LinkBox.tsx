import WrapperBox from "./WrapperBox";
import Link from "next/link";

const LinkBox: React.FC = () => {
  return (
    <WrapperBox>
      <span className="block font-bold font-display text-white text-2xl">
        Liens Importants
      </span>
      <div className="mt-2">
        <div className="flex items-center text-white">
          <span className="flex-1">VT Agenda</span>
          <i
            aria-hidden
            className="cursor-pointer far fa-copy mr-2"
            onClick={() => navigator.clipboard.writeText("#")}
          />
          <i className="cursor-pointer fas fa-external-link" aria-hidden />
        </div>
        <div className="flex items-center text-white">
          <span className="flex-1">Ecampus</span>
          <i
            aria-hidden
            className="cursor-pointer far fa-copy mr-2"
            onClick={() =>
              navigator.clipboard.writeText("https://ecampus.paris-saclay.fr/")
            }
          />
          <Link href="https://ecampus.paris-saclay.fr/">
            <a target="_new">
              <i className="cursor-pointer fas fa-external-link" aria-hidden />
            </a>
          </Link>
        </div>
        <div className="flex items-center text-white">
          <span className="flex-1">Jitsi</span>
          <i
            aria-hidden
            className="cursor-pointer far fa-copy mr-2"
            onClick={() =>
              navigator.clipboard.writeText("https://meet.jit.si/")
            }
          />
          <Link href="https://meet.jit.si/">
            <a target="_new">
              <i className="cursor-pointer fas fa-external-link" aria-hidden />
            </a>
          </Link>
        </div>
      </div>
    </WrapperBox>
  );
};

export default LinkBox;
