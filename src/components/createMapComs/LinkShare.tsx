import { imgLinkShare } from '../../assets/imgs';
import theme from '../../styles/theme';

const LinkShare: React.FC<{ userId: number }> = ({ userId }) => {
  const url = `https://nungil-front.vercel.app/${userId}`;
  //서버통신

  const handleCopyClipBoard = async () => {
    // 복사할 url
    try {
      await navigator.clipboard.writeText(url);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      css={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '7.1rem',
      }}
    >
      <p css={{ color: '#ABABAB', fontSize: '1.2rem', fontWeight: '600' }}>공유링크</p>
      <div
        css={{
          width: '100%',
          height: '4.7rem',
          borderRadius: '10px',
          backgroundColor: '#FAFAFA',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '1.4rem',
          color: theme.colors.Gray6,
          cursor: 'pointer',
        }}
        onClick={handleCopyClipBoard}
      >
        {url}
      </div>
      <img src={imgLinkShare} alt="박스를 누르면 복사가 돼요!" css={{ width: '14rem' }} />
    </div>
  );
};

export default LinkShare;
