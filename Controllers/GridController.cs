using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;
using System;
using Newtonsoft.Json;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

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

        [Route("/GridController/GetGrid")]
        public async Task<string> GetGrid(int gridId)
        {
            var gridElements = await _context.GridElements.Where(x => x.GridId == gridId).ToListAsync<GridElement>();
            
            for(int y = 0; y < 9; y++)
            {
                for(int x = 0; x < 9; x++)
                {
                    if (gridElements.FirstOrDefault(gridelem => gridelem.XLocation == x  && gridelem.YLocation == y) == null)
                    {
                        gridElements.Add(new GridElement(x, y, gridId, 0));
                    }
                }
            }

            return JsonConvert.SerializeObject(gridElements);
        }

        [Route("/GridController/GetElement")]
        public async Task<string> GetElement(int gridId, int xLocation, int yLocation)  
        {
            //Build magic here to return an object
            var gridElement = await _context.GridElements.Where(
                x => x.GridId == gridId 
                && x.XLocation == xLocation 
                && x.YLocation == yLocation).FirstOrDefaultAsync<GridElement>();

            if (gridElement == null)
                gridElement = new GridElement(xLocation, yLocation, gridId, 0);

            return JsonConvert.SerializeObject(gridElement);
        }                
        
    }
}