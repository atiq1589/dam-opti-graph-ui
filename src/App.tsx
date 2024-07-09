import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useQuery, gql } from '@apollo/client';
import Card from './components/Card';

const MY_QUERY = gql`
query {
  PublicImageAsset(limit: 18) {
    items {
      Id
      Title
      AltText
      DateCreated
      DateModified
      ExpiryDate
      FolderGuids
      Height
      LibraryPath
      MimeType
      ParentFolderGuid
      Url
      Width
      Fields {
        Name
        Id
        Type
        Values
        ... on CheckboxField {
          Id
          Name
          Type
          Values
        }
        ... on CurrencyField {
          Id
          Name
          Type
          Values
        }
        ... on DateField {
          Id
          Name
          Type
          Values
        }
        ... on DropdownField {
          Id
          IsMultiSelect
          Name
          Type
          Values
        }
        ... on ImageField {
          Id
          Name
          Type
          Values
        }
        ... on LabelField {
          Id
          IsMultiSelect
          Name
          Type
          Values
        }
        ... on NumberField {
          Id
          Name
          Type
          Values
          DecimalPlaces
          HasThousandSeparator
        }
        ... on PercentField {
          Id
          Name
          Type
          Values
          DecimalPlaces
        }
        ... on RadioField {
          Id
          Name
          Values
          Choices {
            Id
            Name
          }
        }
        ... on RichTextField {
          Id
          Name
          Type
          Values
        }
        ... on TextAreaField {
          Id
          Name
          Type
          Values
        }
        ... on TextField {
          Id
          Name
          Type
          Values
        }
        ... on VideoField {
          Id
          Name
          Type
          Values
        }
      }
      Renditions {
        Height
        Name
        Url
        Width
      }
    }
  }
}
`;
function App() {
  const { loading, error, data } = useQuery(MY_QUERY);
  if (loading) return <p>Loading... </p>;
  if (error) return <p>Error: {error.message} </p>;
  console.log(data.PublicImageAsset.items.map((item) => item.Title));
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.PublicImageAsset.items.map((item: any) => (
          <Card
            key={item.Id}
            Id={item.Id}
            Title={item.Title}
            AltText={item.AltText}
            DateCreated={item.DateCreated}
            DateModified={item.DateModified}
            ExpiryDate={item.ExpiryDate}
            FolderGuids={item.FolderGuids}
            Height={item.Height}
            LibraryPath={item.LibraryPath}
            MimeType={item.MimeType}
            ParentFolderGuid={item.ParentFolderGuid}
            Url={item.Url}
            Width={item.Width}
            Fields={item.Fields}
            Renditions={item.Renditions}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
