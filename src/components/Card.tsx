import React from 'react';

interface Field {
  Id: string;
  Name: string;
  Type: string;
  Values: any[];
}

interface Rendition {
  Height: number;
  Name: string;
  Url: string;
  Width: number;
}

interface ItemProps {
  Id: string;
  Title: string;
  AltText: string;
  DateCreated: string;
  DateModified: string;
  ExpiryDate: string;
  FolderGuids: string[];
  Height: number;
  LibraryPath: string;
  MimeType: string;
  ParentFolderGuid: string;
  Url: string;
  Width: number;
  Fields: Field[];
  Renditions: Rendition[];
}

const Card: React.FC<ItemProps> = ({
  Title,
  Url,
  AltText,
  MimeType,
  DateCreated,
  DateModified,
  Fields,
  Renditions,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="relative h-64 w-full overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 hover:scale-125"
          src={Url}
          alt={AltText || Title}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 overflow-hidden overflow-ellipsis whitespace-normal break-words max-h-16">
          {Title}
        </div>
        <p className="text-gray-700 text-base">MimeType: {MimeType}</p>
        <p className="text-gray-700 text-base">
          Created: {new Date(DateCreated).toLocaleDateString()}
        </p>
        <p className="text-gray-700 text-base">
          Modified: {new Date(DateModified).toLocaleDateString()}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <h3 className="font-bold text-lg">Fields</h3>
        {Fields.map((field) => (
          <div key={field.Id} className="text-gray-700 text-base">
            <strong>{field.Name}:</strong> {field.Values.join(', ')}
          </div>
        ))}
      </div>
      <div className="px-6 pt-4 pb-2">
        <h3 className="font-bold text-lg">Renditions</h3>
        {Renditions.map((rendition) => (
          <div key={rendition.Name} className="text-gray-700 text-base">
            <strong>{rendition.Name}:</strong> {rendition.Width}x
            {rendition.Height} -{' '}
            <a target='_blank' href={rendition.Url} className="text-blue-500">
              View
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;