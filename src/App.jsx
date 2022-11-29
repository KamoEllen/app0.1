import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { 8, 9, 10, 11 } from './components';
import { 1 , 2 , 3 , 4 , 5 , 6 , 7  } from './pages';

const App = () => {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="relative flex">
      <9/>
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
        <8/>

        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<1 />} />
              <Route path="/" element={<2 />} />
              <Route path="/top-charts" element={<3 />} />
              <Route path="/around-you" element={<4 />} />
              <Route path="/artists/:id" element={<5 />} />
              <Route path="/songs/:songid" element={<6 />} />
              <Route path="/search/:searchTerm" element={<7 />} />
            </Routes>
          </div>
          <div className="xl:sticky relative top-0 h-fit">
            <11 />
          </div>
        </div>
      </div>

      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <10/>
        </div>
      )}
    </div>
  );
};

export default App;
