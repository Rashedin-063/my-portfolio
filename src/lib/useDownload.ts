import { useState } from 'react';
import { toast } from 'react-toastify';

export const useDownload = () => {
  const [downloaded, setDownloaded] = useState<boolean>(false);

  const handleClick = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Resume_Rashedin_Islam.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloaded(true);

    toast.success('Downloaded Successful!');
  };

  return { handleClick, downloaded };
};
