import { useGameStore } from '../../store/game';
import * as images from '../../utils/backlog/images-backlog';

const Backlog = () => {
  const [backlog] = useGameStore((state) => [state.backlog]);
  const { getActionsGame } = useGameStore.getState();
  const showBacklog = getActionsGame('showBacklog');
  if (!showBacklog) return null;

  return (
    <div className="flex bss items-center justify-center  ">
      <div>
        <img
          src="/assets/images/backlog/backlog.png"
          alt="Backlog"
          className="mr-2"
          style={{ height: '120px' }}
        />
      </div>
      <div className="flex">
        {backlog.map((item) => (
          <div
            key={item}
            style={{
              backgroundColor: '#7A443E',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              padding: '3px',
              border: 'solid 5px #b6805a',
              borderRadius: '10px / 10px',
              transform: 'translateX(-130%)',
            }}
            className="w-16 h-16 mr-1 rounded-md flex items-center justify-center min-w-16 min-h-16 "
          >
            <img
              src={images[item]}
              alt={item}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>
        ))}
        {backlog.length === 0 && (
          <>
            {[1, 2, 3, 4].map((slot) => (
              <div
                key={slot}
                style={{
                  backgroundColor: '#7A443E',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  padding: '20px',
                  border: 'solid 5px #b6805a',
                  borderRadius: '10px / 10px',
                  transform: 'translateX(-130%)',
                }}
                className="w-16 h-16 mr-1 rounded-md flex items-center justify-center min-w-16 min-h-16 "
              />
            ))}
          </>
        )}
        {backlog.length === 1 && (
          <>
            {[1, 2, 3].map((slot) => (
              <div
                key={slot}
                style={{
                  backgroundColor: '#7A443E',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  padding: '20px',
                  border: 'solid 5px #b6805a',
                  borderRadius: '10px / 10px',
                  transform: 'translateX(-130%)',
                }}
                className="w-16 h-16 mr-1 rounded-md flex items-center justify-center min-w-16 min-h-16 "
              />
            ))}
          </>
        )}
        {backlog.length === 2 && (
          <>
            {[1, 2].map((slot) => (
              <div
                key={slot}
                style={{
                  backgroundColor: '#7A443E',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  padding: '20px',
                  border: 'solid 5px #b6805a',
                  borderRadius: '10px / 10px',
                  transform: 'translateX(-130%)',
                }}
                className="w-16 h-16 mr-1 rounded-md flex items-center justify-center min-w-16 min-h-16 "
              />
            ))}
          </>
        )}
        {backlog.length === 3 && (
          <>
            {[1].map((slot) => (
              <div
                key={slot}
                style={{
                  backgroundColor: '#7A443E',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  padding: '20px',
                  border: 'solid 5px #b6805a',
                  borderRadius: '10px / 10px',
                  transform: 'translateX(-130%)',
                }}
                className="w-16 h-16 mr-1 rounded-md flex items-center justify-center min-w-16 min-h-16 "
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Backlog;
