using System.Collections.Generic;
using MediatR;
using System;

namespace SodokuSolver.Models.Requests
{
    public class GenerateGridRequest : IRequest<string>
    {
        public int GridId {get; set;}

        public GenerateGridRequest(int gridId)
        {
            GridId = gridId;
        }
    }
}