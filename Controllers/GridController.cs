using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;
using System;
using Newtonsoft.Json;

namespace sodokusolver.Controllers
{
    public class GridController : Controller
    {
        SudokuContext _context;
        Random _random;       
        public GridController(SudokuContext context)
        {
            _context = context;
            _random = new Random();            
        }

        public string GetGrid(int gridId)
        {
            for(int y = 0; y < 9; y++)
            {
                for(int x = 0; x < 9; x++)
                {
            
                }
            }

            return "1";
        }

        [Route("/GridController/GetElement")]
        public string GetElement(int gridId, int xLocation, int yLocation)  
        {
            //Build magic here to return an object
            var gridElement = GridElement.getGridElement(gridId);
            return JsonConvert.SerializeObject(gridElement);
        }                
        
    }
}